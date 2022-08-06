import React from 'react'

function Content() {
    const handleNameChange = () => {
        const names = ['Zachy', 'Nduva', 'Techie G', 'Rodgers'];
        let int =Math.floor(Math.random() * 3 );
        return names[int];
    }
  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content