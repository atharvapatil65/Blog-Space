import React, {useState} from 'react'
import authService from '../appwrite/auth.js'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const newAccount = await authService.createAccount(data)
            if (newAccount) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
        <div className="mx-auto w-full max-w-lg bg-white rounded-2xl p-10 shadow-xl border border-gray-200 animate-fadeIn">
            <div className="mb-6 flex justify-center">
                <span className="inline-block w-full max-w-[120px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-3xl font-bold leading-tight text-gray-900 mb-2">
                Sign up to create account
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>
            {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-center text-sm">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5 mt-8'>
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button type="submit" className="w-full mt-6">
                        Create Account
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup