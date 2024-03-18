import Image from 'next/image';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { TbQuestionMark } from 'react-icons/tb';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const defaultFaqs = [
  {
    question: 'Is lunch provided free of cost ?',
    answer:
      'Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.',
  },
  {
    question: 'Do you have 2 Bedroom suites ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Are Wi-Fi costs included in the price ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Where can I reach you for support ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
export const FAQs = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-16 lg:py-20'>
      <div className='flex space-x-7'>
        {/* img */}
        <div className='hidden lg:block w-1/2 '>
          <div className='hidden lg:block rounded-2xl h-[35rem]  w-full bg-slate-800'>
            <TbQuestionMark className='p-16 w-full h-full text-white font-normal' />
          </div>
        </div>
        <div className='pl-4 pt-2'>
          <h1 className='text-gray-100 text-5xl font-bold'>FAQs</h1>
          <p className='max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-muted-foreground'>
            Here are some frequently asked questions about our hotels from our
            loving customers. Should you have any other questions, feel free to
            reach out via the contact form below.
          </p>
          <div className=' bg-slate-50 p-5 mt-6 rounded'>
            <Accordion type='single' collapsible className='w-full'>
              {defaultFaqs.map(({ answer, question }, i) => (
                <AccordionItem
                  value={`item-${i}`}
                  key={i}
                  className=' font-semibold'
                >
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
