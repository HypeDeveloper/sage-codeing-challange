import arrowIcon from '../assets/icons/point Arrow.png'

export function ArrowButton(props) {
    const borderStyle = { 
        border: `1px solid ${props.color || 'black'}`
    }
    return (
        <div className="arrowWrap" style={borderStyle}>
            <img className='arrowimg' src={arrowIcon} alt="" />
        </div>
    )
}