import { Zap } from 'lucide-react';
function Hero() {
    return (
        <div className="min-h-screen bg-[#F6F6F4] relative overflow-hidden">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] opacity-60"></div>

            <div className="relative z-10 flex flex-col items-center text-center pt-20">

                <div className="px-5 py-2 rounded-full border bg-white flex items-center">

                    <p className="text-xs font-medium text-[#014636] flex">
                       <Zap /> CREATE FOR FAST
                    </p>
                </div>


                <h1 className="mt-8 text-7xl font-bold text-[#014636] leading-tight max-w-5xl">
                    One tool to manage
                    <br />
                    contracts and your team
                </h1>


                <p className="mt-8 text-gray-700 text-xl max-w-4xl leading-9">
                    Clause helps legal teams work faster, smarter and more
                    efficiently, delivering the visibility and data-driven
                    insights to mitigate risk and ensure compliance.
                </p>


                <div className="mt-10 flex gap-6">

                    <button className="bg-[#014636] text-white px-10 py-4 rounded-2xl">
                        Start for Free
                    </button>

                    <button className="bg-white px-10 py-4 rounded-2xl shadow-sm">
                        Get a Demo
                    </button>

                </div>
            </div>






            <div className="absolute bottom-8 w-full flex justify-around items-center text-gray-500 font-semibold">

                <div>
                    <p className="text-4xl">100+</p>
                    <p>companies partner</p>
                </div>

                <p className="text-4xl">HubSpot</p>
                <p className="text-4xl">Dropbox</p>
                <p className="text-4xl">Square</p>
                <p className="text-4xl">INTERCOM</p>
                <p className="text-4xl">grammarly</p>

            </div>

        </div>
    );
}

export default Hero;