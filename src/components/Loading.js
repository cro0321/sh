import React from 'react'

function Loading() {
  return (

    <>    
    <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="max-w-[380px] h-[100vh] bg-white flex items-center">
                <img src="./../Images/loading.gif" className='mx-auto' alt="loading" />
            </div>

        </div>
        </>

  )
}

export default Loading