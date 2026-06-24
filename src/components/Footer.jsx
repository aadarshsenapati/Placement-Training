import { Camera, Mail, Phone} from 'lucide-react';

function Footer() {
    return (
        <div className="bg-[#101C1C] text-white px-24 py-16">

            <div className="flex justify-between">

                <div className="space-y-8">

                    <div className="flex items-center gap-2">
                        <Camera size={28} className="text-[#C7F464]" />

                        <h1 className="text-3xl font-medium">
                            Clause
                        </h1>
                    </div>


                    <div className="space-y-5 text-lg">

                        <div className="flex items-center gap-3">
                            <Mail size={18} />
                            <p>hello@clause.com</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone size={18} />
                            <p>+621 987 654 321</p>
                        </div>

                    </div>

                </div>



                <div className="space-y-5">

                    <h2 className="font-semibold">Solution</h2>

                    <p>Why Cequence</p>
                    <p>Features</p>
                    <p>OpenAI</p>
                    <p>Technology</p>
                    <p>Security</p>

                </div>



                <div className="space-y-5">

                    <h2 className="font-semibold">Customers</h2>

                    <p>Procurement</p>
                    <p>Sales</p>
                    <p>Legal</p>
                    <p>Medium</p>
                    <p>Enterprise</p>

                </div>



                <div className="space-y-5">

                    <h2 className="font-semibold">Resources</h2>

                    <p>Pricing</p>
                    <p>Contact Sales</p>
                    <p>Changelog</p>
                    <p>Blog</p>

                </div>

            </div>



            <div className="mt-24 flex justify-between items-center">

                <p className="text-gray-300">
                    © Copyright 2026 Clause. All rights reserved.
                </p>


                <div className="flex gap-6">



                </div>

            </div>

        </div>
    );
}

export default Footer;