import React from 'react';

import ClickMenu from '../../common/ClickMenu';

const MemberList = (props) => {
  const content = [];

  // const fullRow = Math.ceil((props.memberProps.members.length + 1) / 2);
  // const partialRow = (props.memberProps.members.length + 1) % 2;

  if (props.memberProps.members.length > 0) {
    for (
      let index = 0;
      index < props.memberProps.members.length + 1;
      index += 1
    ) {
      if (index % 2 === 0) {
        content.push(
          <div className="row" key={index}>
            {index < props.memberProps.members.length && (
              <div className="col">
                <div className="card bg-light mb-3">
                  <div className="card-header">
                    <div className="pull-left card-header-adjust">
                      Leny Vellayathuparampil
                    </div>
                    <div className="pull-right">
                      <ClickMenu
                        id={index}
                        toggleClass="fa-ellipsis-v"
                        items={props.memberProps.pageMenu}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <img
                          src="https://via.placeholder.com/100x120"
                          className="img-fluid rounded"
                          alt=""
                        />
                      </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="col">Age</div>
                          <div className="col">45</div>
                        </div>
                        <div className="row">
                          <div className="col">Blood Group</div>
                          <div className="col">O+</div>
                        </div>
                        <div className="row">
                          <div className="col">Blood Group</div>
                          <div className="col">O+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {index + 1 < props.memberProps.members.length && (
              <div className="col">
                <div className="card bg-light mb-3">
                  <div className="card-header">
                    <div className="pull-left card-header-adjust">
                      Leny Vellayathuparampil
                    </div>
                    <div className="pull-right">
                      <ClickMenu
                        id={index + 1}
                        toggleClass="fa-ellipsis-v"
                        items={props.memberProps.pageMenu}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <img
                          src="https://via.placeholder.com/100x120"
                          className="img-fluid rounded"
                          alt=""
                        />
                      </div>
                      <div className="col-8">
                        <div className="row">
                          <div className="col">Age</div>
                          <div className="col">45</div>
                        </div>
                        <div className="row">
                          <div className="col">Blood Group</div>
                          <div className="col">O+</div>
                        </div>
                        <div className="row">
                          <div className="col">Blood Group</div>
                          <div className="col">O+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {index + 1 >= props.memberProps.members.length && (
              <div className="col">+ Add member</div>
            )}
          </div>,
        );
      }
    }
  } else {
    // const addindex = props.members.length > 0 ? props.members.length - 1 : 0;
    // const keyVal = props.members.length > 0 ? props.members[addindex].ID : 0;
    content.push(
      <div className="row" key="0">
        <div className="col">+ Add member</div>
      </div>,
    );
  }

  return <div>{content}</div>;
};

export default MemberList;
