type Props = {
    heading: string;
};

export default function SectionHeader(props: Props) {
    return (
        <h2 class="text-2xl text-slate-500 font-semibold dark:text-slate-100 text-center underline mb-2">
            {props.heading}
        </h2>
    );
}
