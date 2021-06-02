function HeaderItem(props) {
    return (
        <div className="flex flex-col group items-center cursor-pointer">
            <props.Icon className="h-8 mb-1" />
            <p className="opacity-100 hover:opacity-100 tracking-widest group-hover:opacity-100">
                {props.title}
            </p>
        </div>
    );
}

export default HeaderItem;
