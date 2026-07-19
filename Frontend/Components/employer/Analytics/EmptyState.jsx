export default function EmptyState({

    title,

    description,

    icon="📊"

}) {


    return (

        <div

            className="
                flex
                h-full
                min-h-[250px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-dashed
                border-slate-300
                bg-slate-50
                text-center
                p-6
            "

        >

            <div

                className="
                    text-5xl
                "

            >

                {icon}

            </div>



            <h3

                className="
                    mt-4
                    text-lg
                    font-bold
                    text-slate-800
                "

            >

                {title}

            </h3>



            <p

                className="
                    mt-2
                    max-w-sm
                    text-sm
                    text-slate-500
                "

            >

                {description}

            </p>


        </div>

    );

}