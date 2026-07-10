"use client";

export default function ConfirmationDialog({

    open,

    title,

    message,

    confirmText,

    cancelText,

    loading,

    onConfirm,

    onCancel

}) {


    if (!open) return null;


    return (

        <div

            className="

                fixed

                inset-0

                z-[100]

                flex

                items-center

                justify-center

                bg-black/50

                backdrop-blur-sm

                p-4

            "

        >



            <div

                className="

                    w-full

                    max-w-md

                    rounded-3xl

                    bg-white

                    shadow-2xl

                    border

                    border-slate-200

                    overflow-hidden

                "

            >



                {/* Header */}



                <div

                    className="

                        border-b

                        border-slate-200

                        px-6

                        py-5

                    "

                >

                    <h2

                        className="

                            text-xl

                            font-bold

                            text-slate-800

                        "

                    >

                        {title}

                    </h2>

                </div>





                {/* Body */}



                <div

                    className="

                        px-6

                        py-6

                    "

                >

                    <p

                        className="

                            text-slate-600

                            leading-7

                        "

                    >

                        {message}

                    </p>

                </div>





                {/* Footer */}



                <div

                    className="

                        flex

                        justify-end

                        gap-3

                        px-6

                        py-5

                        border-t

                        border-slate-200

                        bg-slate-50

                    "

                >



                    <button

                        onClick={onCancel}

                        disabled={loading}

                        className="

                            px-5

                            py-2.5

                            rounded-xl

                            bg-slate-200

                            text-slate-700

                            font-medium

                            hover:bg-slate-300

                            transition

                            disabled:opacity-60

                        "

                    >

                        {cancelText}

                    </button>





                    <button

                        onClick={onConfirm}

                        disabled={loading}

                        className="

                            px-5

                            py-2.5

                            rounded-xl

                            bg-red-600

                            text-white

                            font-medium

                            hover:bg-red-700

                            transition

                            disabled:opacity-60

                        "

                    >

                        {

                            loading

                            ?

                            "Please wait..."

                            :

                            confirmText

                        }

                    </button>



                </div>



            </div>



        </div>

    );

}