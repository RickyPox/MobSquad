/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const faqs = [
    {
        question: "Question",
        answer: "Answer.",
        id:1,
    },
    {
    question: "Question",
    answer: "Answer",
    },
]
function classNames(...classes:String[]) {
return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
    
    return (
    <div className="2xl:px-[310px] lg:px-[150px] px-6 md:px-20 flex flex-col justify-center w-screen md:h-screen py-[120px]" id="faq">
        <div>
        <div>
        <h1 className="font-[Poppins] text-white uppercase lg:text-[65px] text-[30px] font-extrabold text-center">FAQ</h1>
            <dl className="mt-6 space-y-6 divide-y divide-white">
            {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                    <>
                    
                    <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                        <span className="font-medium text-white">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform transition-all duration-500')}
                            aria-hidden="true"
                            />
                        </span>
                        </Disclosure.Button>  
                    </dt>
                    <Transition 
                            enter="transition ease-out duration-500"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transition opacity-100 scale-100"
                            leave="transition ease-in duration-200"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-white">{faq.answer}</p>
                    </Disclosure.Panel>
                    </Transition> 
                    
                    </>
                )}
                </Disclosure>
            ))}
            </dl>
        </div>
        </div>
    </div>
    )
}