import {useEffect, useState} from 'react'
import { useAuth } from '@clerk/clerk-react'
import { axiosInstance } from '@/lib/axios'
import { Loader } from 'lucide-react'


const updateApiToken = (token:string | null) =>{
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }else{
        delete axiosInstance.defaults.headers.common['Authorization']
    }
}

const AuthProvider = () => {
  return (
    <div>
        const {getToken,userId} = useAuth();
        const[loading,setLoading] = useState(true);


        useEffect(() =>{
        const initAuth = async () =>{
        try {
            const token = await getToken();
            updateApiToken(token);
        } catch (error) {
            updateApiToken(null);
            console.log("Error in auth provider", error);

        }finally{
            setLoading(false);
        }
        };
        initAuth();
        },[getToken]);

        if (loading)return(
            <div className='h-screen w-full flex items-center justify-center'>
                <Loader/>

            </div>
        )
    </div>
  )
}

export default AuthProvider
