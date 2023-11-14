import { Poppins, Lora } from 'next/font/google'

export const poppins = Poppins({
    weight: ['400', '500'],
    subsets: ['latin'] 
});
  
  export const lora = Lora({
    subsets: ['latin']
});