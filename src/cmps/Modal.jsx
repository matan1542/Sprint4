import { Button } from "@material-ui/core";


export function Modal({ onOutSideClick, closeModal, userUrl }) {
  return (
    <div onClick={onOutSideClick} className="modal-container">
      <div className="modal ">
        <h2 className="modal-header">3 steps to start building together</h2>
        <ul>
          <li>
            <h3>1. <Button variant="outlined" color="primary" onClick={({ target }) => { navigator.clipboard.writeText(userUrl) }}>Copy the link!</Button></h3>
          </li>
          <li>
            2. Send it to your friend
           </li>
          <li>
            3. Start edit together, That easy!
           </li>
        </ul>
      </div>
    </div>
  );

}

