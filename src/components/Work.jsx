import { ButtonPrimary } from "./Button";

const Work = () => {
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2">
                Work Experience
            </h2>

            <p className="text-white mt-3 mb-4 max-w-[100ch]">
            I have professional experience conducting data analysis in support of IR Spectroscopy research and maintaining and developing .NET enterprise applications,
            continuously growing in my skillset!
            </p>

            <div className='flex items-center gap-3 ring-2 ring-inset bg-stone-50 rounded-2xl p-3 hover:bg-slate-300 transition-colors group '>
                <img
                src="images/LLNLLogo.png"
                alt="LLNLBanner"
                className="img-work-home"/>
            </div>

            <div className='flex items-center gap-3 ring-2 ring-inset bg-stone-50 rounded-2xl p-3 hover:bg-slate-300 transition-colors group '>
                <img
                src="images/GEICOLogo.png"
                alt="GEICOBanner"
                className="img-work-home"/>
            </div>
            
            <div className="flex items-center gap-3 py-4">
                <ButtonPrimary 
                    href="/experience"
                    label="Read More"
                    icon="arrow_forward"
                />
            </div>
        </div>
    </section>
  )
}

export default Work;