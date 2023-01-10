import React from "react";
import { useState } from "react"

export default function Form() {
    //State
    const [locationUserInput, setLocationUserInput] = useState('')
    const [minUserInput, setMinUserInput] = useState('')
    const [maxUserInput, setMaxUserInput] = useState('')
    const [avgCookies, setAvgUserInput] = useState('')

    const [fullReplyState, setFullReplyState] = useState([])

    const handleLocationChange = (e) => {
        setLocationUserInput(e.target.value)
        // console.log(e.target.value)
    }
    const handleMinChange = (e) => {
        setMinUserInput(e.target.value)
        // console.log(e.target.value)
    }
    const handleMaxChange = (e) => {
        setMaxUserInput(e.target.value)
        // console.log(e.target.value)
    }
    const handleAvgChange = (e) => {
        setAvgUserInput(e.target.value)
        // console.log(e.target.value)
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        
        //save the old values
        const fullReply = {
            location : locationUserInput,
            min : minUserInput,
            max : maxUserInput,
            avg : avgCookies
        }
        console.log(fullReply.location)
        // keep the old values and save the new one
        setFullReplyState([...fullReplyState,fullReply])
    }

    return(
        <>
            <section className="dark:bg-gray-900 bg-gray-400 flex flex-col py-6 bg-fixed bg-center bg-cover bg-form-pattern bg- sm:py-12" >
                <section className="relative py-3 sm:max-w-xl sm:mx-auto ">
                    <form 
                    onSubmit={onSubmitHandler}
                    className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-12 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-password">
                                Location
                            </label>
                            <input 
                            onChange={handleLocationChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="location"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-12 mb-2">
                            <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                            <label className="block tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-city">
                                Minimum Customers Per Hour
                            </label>
                            <input 
                            onChange={handleMinChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="00"/>
                            </div>
                            <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                            <label className="block tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-city">
                                Maximum Customers Per Hour
                            </label>
                            <input
                            onChange={handleMaxChange} 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="00"/>
                            </div>
                            <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                            <label className="block tracking-wide text-gray-300 text-xs font-bold mb-2" for="grid-city">
                                Average Cookis per Sale
                            </label>
                            <input 
                            onChange={handleAvgChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="00"/>
                            </div>
                        </div>
                        <section className="flex flex-wrap -mx-12 mb-6">
                            <button className="px-72 py-3 text-white rounded-md bg-cyan-900 hover:bg-cyan-700"> Create </button>
                        </section>
                    </form>
                </section>
            </section>





            {/* result section */}
            <section className="dark:bg-black bg-gray-400 w-full pt-10 text-center shadow-lg shadow-black-50">
                {fullReplyState.length > 0 && fullReplyState.map((item,index)=>{
                    return(
                        <div>
                            <p>location: {item.location}, minCustomers: {item.min}, maxCustomers: {item.max}, avgCookies: {item.avg}  </p>
                        </div>
                    )
                })}
            </section>

        </>
    )
}