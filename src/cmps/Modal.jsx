

function NoteModal({onOutSideClick,closeModal}){
    return (
      <div onClick={onOutSideClick} className="modal-container">
        <div className="modal ">
          <span onClick={closeModal} className="close-modal">
            x
          </span>
         
        </div>
      </div>
    );

}

