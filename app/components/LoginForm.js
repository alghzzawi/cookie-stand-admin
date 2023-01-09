import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth'

export default function LoginForm() {

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const { login } = useContext(AuthContext);

    function usernameChangeHandler(e) {
        SetUsername(e.target.value);
    }

    function passwordChangeHandler(e) {
        SetPassword(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        // call login function fron context
        login({
            username,
            password
        });

    }

    return (

        <form class="dark:bg-gray-900 bg-gray-300 " onSubmit={submitHandler}>
            <div class="flex justify-center h-screen w-screen items-center">
                <div class=" w-full md:w-1/2 flex flex-col items-center " >

                    <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>

                    <div class="w-3/4 mb-6">
                        <input type="text" name="username" id="username" class="text-black w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="User Name"  onChange={usernameChangeHandler}/>
                    </div>

                    <div class="w-3/4 mb-6">
                        <input type="password" name="password" id="password" class="text-black w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password" onChange={passwordChangeHandler}/>
                    </div>

                    <div class="w-3/4 flex flex-row justify-between">
                        <div class=" flex items-center gap-x-1">
                            <input type="checkbox" name="remember" id="" class=" w-4 h-4  " />
                            <label for="" class="text-sm text-slate-400">Remember me</label>
                        </div>
                        <div>
                            <a href="#" class="text-sm text-slate-400 hover:text-blue-500">Forgot?</a>
                        </div>
                    </div>

                    <div class="w-3/4 mt-4">
                        <button type="submit" class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button>
                    </div>
                </div>
            </div>
        </form>
    )
}