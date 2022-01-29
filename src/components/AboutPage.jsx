import Companies from './Companies';

function AboutPage() {
    return (
        <>
        <div className="bg-red-50 font-QuickSand">
            <div className="py-4 h-auto lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-Raleway font-bold text-center mt-3 mb-5">About Us</h1>
                <div className="my-10 space-y-10 px-4">
                    <div>
                        <h3 className="font-bold">
                            About Applianceplus -
                        </h3>
                        <p>
                            Applianceplus is an ideal company that can repair and maintain washing machines, refrigerator, microwave and much more. We have years of experience and expertise in the domain. We can handle any type of appliance irrespective of its company & complexity. Applianceplus was established in 2010, The owner is a master in the plumbing industry (All Home Electronics) having more than 10 years of experience in residential, commercial and industrial services.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold"> Reason to Choose Us ?</h3>
                        <p>Home appliance Repair is one of the top electronic appliance service companies with years of experience and expertise. We can handle any type of appliance irrespective of its criticality. Whether it Is a geyser or a washing machine, we can handle it all.</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Our Motto : Take Action in Daily Situations to Ensure Our Client Is Well-Informed and Pleased</h3>
                        <p>At Home Electronics Repair, you will find that you not only receive excellent (superior) service but that someone is always reachable when you need us. To us, that’s all part of “Making it Happen.” Call us today to find out how we can help you with all of your Home Electronics needs.</p>
                    </div>
                </div>
            </div>
            </div>
                    <Companies />
        </>
    )
}

export default AboutPage;