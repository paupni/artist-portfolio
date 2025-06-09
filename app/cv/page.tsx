 import { playfairDisplay } from '@/app/ui/fonts';

 export default async function CurriculumVitae() {
    return (
        <main className='my-20'>
            <h2  className={`${playfairDisplay.className} text-2xl font-semibold text-black pb-5`}>Education</h2>
            <ul className='text-gray-700'>
                <li>
                    <span className='text-gray-800 pr-6'>2023 - 2024</span>Postgraduate Web Applications Programming, AGH, Kraków
                </li>
                <li>
                    <span className='text-gray-800 pr-6'>2018 - 2024</span>Painting, MA Art, ASP, Kraków                     
                </li>
                <li>
                    <span className='text-gray-800 pr-6'>2019 - 2020</span>Institute of Nuclear Physics, Polish Academy of Sciences (PAN), BEng, Kraków
                </li>
                <li>
                    <span className='text-gray-800 pr-6'>2015 - 2020</span>Applied Physics, AGH, Kraków
                </li>
            </ul>
        </main>
    )
}