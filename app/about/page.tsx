import Image from 'next/image'

import { playfairDisplay } from '@/app/ui/fonts';

export default async function About() {
    return (
        <main className='flex'>
            <div className='flex w-1/3 justify-center pt-16'>
                <Image 
                    src='https://ycep4hdyvmfuo63e.public.blob.vercel-storage.com/avatar-bio-A5O4nAfQholtqJwTjSPKw9Ej7V4cm5.jpg'
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-full w-80 h-80 object-cover"                
                />
            </div>

            <div className='w-2/3 pr-12'>
                <section className='m-6 pb-10'>
                    <h2 className={`${playfairDisplay.className} text-2xl font-semibold text-black pb-5`}>Bio</h2>
                    <p className='text-gray-800'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </section>
                <section className='m-6'>
                    <h2 className={`${playfairDisplay.className} text-2xl font-semibold text-black pb-5`}>Artist Statement</h2>
                    <p className='text-gray-800'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </section>
            </div>
        </main>
    )
}