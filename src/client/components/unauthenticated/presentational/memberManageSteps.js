import React from 'react';

export default function MemberManageSteps({ hideMemberManage }) {
  return (
    <div className="mx-auto" style={{ width: '500px' }}>
      <div className="row">
        <div className="col">dsfdsfsd</div>
        <div className="col">sdfsdf</div>
        <div className="col">dsfsdf</div>
      </div>
      <div className="mx-auto" style={{ width: '50px' }}>
        <button type="button" className="btn btn-warning btn-circle btn-lg" onClick={hideMemberManage}>
          <i className="fa fa-times-circle-o" />
        </button>
      </div>
    </div>

  // <div className="d-flex justify-content-center bd-highlight mb-3">
  //   <div className="p-2 bd-highlight">
  //     <button type="button" onClick={hideMemberManage}>
  //       close
  //     </button>
  //   </div>
  // </div>
  );
}
