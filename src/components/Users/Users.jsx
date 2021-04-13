import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({
                   users, totalUsersCount, pageSize, currentPage,
                   onPageChanged, followingInProgress, unfollow, follow
               }) => {
    return (
        <div>
            <Pagination totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}/>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingInProgress={followingInProgress}
                                     unfollow={unfollow}
                                     follow={follow}/>
                )
            }
        </div>
    )
}

export default Users;