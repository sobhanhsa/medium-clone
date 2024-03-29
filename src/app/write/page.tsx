"use client"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Image from "next/image";
import styles from "./writePage.module.css"
import { useEffect, useMemo, useState } from "react";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
import dynamic from "next/dynamic";
import LoadingComponent from "@/components/loadingComponent/LoadingComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fireBaseApp } from "@/utils/firebase";
import { slugify } from "@/utils/slugify";


const storage = getStorage(fireBaseApp);

const WritePage = () => {
    

    const ReactQuill = useMemo(
        () => dynamic(() => import('react-quill'), { ssr: false }),[]);

    const [file,setFile] = useState<File | null>(null)
    const [open , setOpen] = useState<boolean>(false)
    const [value,setValue] = useState("")
    const [media,setMedia] = useState<null | string>(null);
    const [title,setTitle] = useState("");

    const {status} = useSession()

    let router = null
    
    router  = useRouter()

    const fileInputHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setFile(e.target.files[0]);
    };

    const submitHandler = async() => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`,{
            method:"POST",
            body:JSON.stringify({
                slug:slugify(title),
                title,
                desc:value,
                img:media,
                catSlug:"travel"
            })
        })
    };  

    useEffect(() => {
        const upload = () => {


            if (!(file?.name)) return;

            setMedia("loading");

            // Create the file metadata
            /** @type {any} */

            const metadata = {
                contentType: 'image/jpeg'
            };

            const uniqueName = new Date().getTime() + file?.name;

            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = ref(storage, 'images/' + uniqueName );
            const uploadTask = uploadBytesResumable(storageRef, file as File, metadata);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                }, 
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                }, 
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setMedia(downloadURL);
                    });
                }
            );

        };

        file && upload();
    },[file])

    if (status === "loading") return (<LoadingComponent />)


    if (status !== "authenticated") {
        setTimeout(() => router!.push("/login"),100)
    }
    


    return ( 
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input}
             onChange={ e => setTitle(e.target.value)}/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => { setOpen(prev => !prev) }}>
                    <Image src="/plus.png" alt="" width={16} height={16}/>
                </button>
                
                { open && 
                    (
                        <div className={styles.add}>
                            <input
                                type="file" 
                                id="image"
                                onChange={fileInputHandler}
                                style={{display:"None"}}
                            />
                            <button 
                                className={styles.addButton} 
                                // onClick={() => { setOpen(prev => !prev) }}
                            >
                                <label htmlFor="image">
                                    <Image src="/image.png" alt="" width={16} height={16}/>
                                </label>
                            </button>            
                            <button className={styles.addButton} 
                                // onClick={() => { setOpen(prev => !prev) }}
                            >
                                {/* <label htmlFor="image"> */}
                                    <Image src="/external.png" alt="" width={16} height={16}/>
                                {/* </label> */}
                            </button>            
                            <button className={styles.addButton} 
                                // onClick={() => { setOpen(prev => !prev) }}
                                >
                                {/* <label htmlFor="image"> */}
                                    <Image src="/video.png" alt="" width={16} height={16}/>
                                {/* </label> */}
                            </button>                       
                        </div>
                    )
                }
                <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="tell youre storry"/>
            </div>
            <button className={styles.publish} onClick={submitHandler} 
                disabled={media === "loading"}>
                publish
            </button>
        </div>
     );
}
 
export default WritePage;