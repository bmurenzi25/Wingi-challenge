export default function Button({ children, onClick, type }) {
    const addStyles = () => {
      let classes =
        'btn'
  
      switch (type) {
        case 'edit':
          return `${classes} edit-btn`
        case 'add':
          return `${classes} add-btn`
        case 'delete':
          return `${classes} remove-btn`
        default:
          return `${classes}`
      }
    }
  
    return (
      <button className={addStyles()} onClick={onClick}>
        {children}
      </button>
    )
  }