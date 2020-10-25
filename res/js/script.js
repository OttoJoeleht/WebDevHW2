$(function () {

    $('#avatar-container').click(function () {

    });

});

function loadUserInfo() {
    return $.get(
        {
            url: 'https://private-anon-c512e845db-wad20postit.apiary-mock.com/users/1',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}

function loadPostInfo() {
    return $.get(
        {
            url: 'https://private-anon-c512e845db-wad20postit.apiary-mock.com/posts',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}

function loadProfilesInfo() {
    return $.get(
        {
            url: 'https://private-anon-c512e845db-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}