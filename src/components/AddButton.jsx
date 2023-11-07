export default function AddButton({ onAdd, show }) {
    return (
        <div className="btn-control">
            <button
                className="btn-add"
                onClick={onAdd}
                style={{ backgroundColor: show ? '#d00000' : '#2b9348' }}
            >{show ? 'Close' : 'Add'}</button>

        </div>
    )
}