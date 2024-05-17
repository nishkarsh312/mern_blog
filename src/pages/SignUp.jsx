import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

    const [ formData, setFormData ] = useState({});
    const [ errorMessages, setErrorMessages ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        // console.log(e.target.value);
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    }

    // console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.username || !formData.email || !formData.password){
            return setErrorMessages("Please fill out all fields.")
        }
        try {
            setLoading(true);
            setErrorMessages(null);
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
        const data = await res.json();
        if (data.success === false) {
            setLoading(false);
            return setErrorMessages(data.message);
        }
        setLoading(false);
        if(res.ok) {
            navigate('/sign-in');
        }
        } catch (error) {
            setErrorMessages(data.message);            
            setLoading(false);
        }
    }

    return(
        <div className='min-h-screen mt-4'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                {/* left side */}
                <div className='flex-1'>
                    <div>
                    <Link to="/" className='font-bold dark:text-white text-2xl text-justify'>
                        <span className='px-2 py-1 '>Nishkarsh</span>
                        Blog
                    </Link>
                    </div>
                    <p className='text-sm mt-4 text-justify'>
                      This is a demo project. You can signup with your email and password
                      or with Google.  
                    </p>
                </div>
                {/* Right side */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
                        <div>
                            <Label value='Enter Username' />
                            <TextInput 
                                type="text"
                                placeholder='Username'
                                id="username" onChange={handleChange} />
                        </div>
                        <div>
                            <Label value='Enter Email' />
                            <TextInput 
                                type="email"
                                placeholder='Name@company.com'
                                id="email" onChange={handleChange} />
                        </div>
                        <div>
                            <Label value='Enter Password' />
                            <TextInput 
                                type="password"
                                placeholder='Password'
                                id="password" onChange={handleChange} />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size='sm'/>
                                        <span className='pl-3'>Loading...</span>
                                    </>
                                ) : 'Sign Up'
                            }
                        </Button>
                    </form>
                    <div className='flex gap-2 text-sm mt-4'>
                        <span>Have An Account ?</span>
                        <Link to='/sign-in' className='text-blue-500'>
                            Sign In
                        </Link>
                    </div>
                    {
                        errorMessages && (
                            <Alert className='mt-4' color='failure'>
                                { errorMessages }
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SignUp;