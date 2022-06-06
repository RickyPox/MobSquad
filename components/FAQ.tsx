/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
    {
        question: "When will Hugo Stop Being a Cornos?",
        answer: "Never.",
    },
    {
    question: "When will Hugo Being a Singer?",
    answer: "Never and ever.",
    },
]
function classNames(...classes:String[]) {
return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
    return (
    <div className="pt-[150px]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-left text-3xl font-extrabold text-white sm:text-4xl">FAQ</h1>
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
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                            />
                        </span>
                        </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-white">{faq.answer}</p>
                    </Disclosure.Panel>
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