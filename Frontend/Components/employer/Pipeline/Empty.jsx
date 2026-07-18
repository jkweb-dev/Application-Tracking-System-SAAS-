export default function EmptyColumn() {


    return (

        <div

            className="
                flex
                flex-1
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-slate-300
                bg-slate-50
                p-6
                text-center
            "

        >

            <div>

                <div

                    className="
                        mx-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-slate-200
                        text-xl
                    "

                >

                    📂

                </div>



                <p

                    className="
                        mt-4
                        text-sm
                        font-medium
                        text-slate-500
                    "

                >

                    No candidates yet

                </p>



                <p

                    className="
                        mt-1
                        text-xs
                        text-slate-400
                    "

                >

                    Drag applicants here

                </p>

            </div>

        </div>

    );

}