import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const showPopup = () => {
        alert("Nilai sudah 0, tidak boleh menampilkan minus");
    };

    const checkIfMinus = (countis) => {
        if (countis <= 0) {
            showPopup();
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>Anda telah klik {count} kali</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <button onClick={() => checkIfMinus(count)}>Kurang</button>
        </div>
    );
}

export default Counter;