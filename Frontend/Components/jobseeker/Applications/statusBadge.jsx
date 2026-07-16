export default function StatusBadge({ status }) {


    const statusStyles = {

        "Applied": `
            bg-blue-100
            text-blue-700
            border-blue-200
        `,

        "Under Review": `
            bg-amber-100
            text-amber-700
            border-amber-200
        `,

        "Shortlisted": `
            bg-green-100
            text-green-700
            border-green-200
        `,

        "Interview": `
            bg-purple-100
            text-purple-700
            border-purple-200
        `,

        "Accepted": `
            bg-emerald-100
            text-emerald-700
            border-emerald-200
        `,

        "Rejected": `
            bg-red-100
            text-red-700
            border-red-200
        `

    };



    return (

        <span

            className={`
                inline-flex
                items-center
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-semibold
                ${statusStyles[status]}
            `}

        >

            <span

                className="
                    mr-2
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-current
                "

            />

            {status}

        </span>

    );

}