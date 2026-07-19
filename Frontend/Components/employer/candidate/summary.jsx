export default function SummarySection({

    profile

}) {


    return (

        <section

            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "

        >

            <h2

                className="
                    text-xl
                    font-bold
                    text-slate-900
                "

            >

                Professional Summary

            </h2>



            <p

                className="
                    mt-5
                    leading-8
                    text-slate-600
                "

            >

                {

                    profile?.bio

                    ||

                    "No professional summary added by candidate."

                }

            </p>


        </section>

    );

}