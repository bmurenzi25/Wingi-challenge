import Image from 'next/image'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <Image
            src={spinner}
            alt="Loading......."
            style={{ margin: 'auto', display: 'block' }}
            width={37}
            height={37}
            priority
        />
    )
}

export default Spinner