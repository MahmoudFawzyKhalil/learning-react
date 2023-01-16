export default function Button() {
    return (
        // Empty wrapper
        <>
            <style>
                {/* CSS */}
                {` 
                    button {
                        border: none;
                        color: beige;
                    }
                `}
            </style>
            <button>
                Click Me!
            </button>
        </>
    );
}