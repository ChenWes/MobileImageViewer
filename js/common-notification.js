var $toastlast;

toastr.options = {
    closeButton: true,
    debug: true,
    progressBar: false,
    positionClass: 'toast-top-center',
    onclick: null
};

function ShowSuccess(title,message)
{
	toastr.success(title, message)
}

function ShowInfo(title,message)
{
	toastr.info(title, message)
}

function ShowWarning(title,message)
{
	toastr.warning(title, message)
}

function ShowError(title,message)
{
	toastr.error(title, message)
}
