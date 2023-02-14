import React from 'react';

const CreatePost = ({user}) => {
    return (
        <div>
            This is create post of {user?.name}
        </div>
    );
};

export default CreatePost;