export default function Button({children,className,onHandleClick = ()=>{console.log('click')},...rest}){
    return(
        <button className={className}  onClick={onHandleClick} {...rest}>
{children}
        </button>
    )
}