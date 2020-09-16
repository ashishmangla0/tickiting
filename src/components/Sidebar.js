import React from 'react';
const Sidebar = () => {
  return (
    <>
      <style jsx="true">{`
            .aside-left{
                width: 230px;
                padding-right: 1.25rem;
                padding-bottom: 4rem;
                overflow-x: hidden;
            }
           `}
      </style>
      <aside className="aside-left">
        this is Sidebar
      </aside>
    </>
  )
}
export default Sidebar