function showHide()
{
    if (document.getElementById('bands').style.display == 'none')
    {
        document.getElementById('bands').style.display = 'block';
        document.getElementById('tours').style.display = 'block';
        document.getElementById('contacts').style.display = 'block';
        document.getElementById('merch').style.display = 'block';
    }
    else
    {
        document.getElementById('bands').style.display = 'none';
        document.getElementById('tours').style.display = 'none';
        document.getElementById('contacts').style.display = 'none';
        document.getElementById('merch').style.display = 'none';
    }
}

function show()
{
    if (window.innerWidth >= 600)
        {
            document.getElementById('bands').style.display = 'block';
            document.getElementById('tours').style.display = 'block';
            document.getElementById('contacts').style.display = 'block';
        }
        else
        {
            document.getElementById('bands').style.display = 'none';
            document.getElementById('tours').style.display = 'none';
            document.getElementById('contacts').style.display = 'none';
            document.getElementById('merch').style.display = 'none';
        }
}