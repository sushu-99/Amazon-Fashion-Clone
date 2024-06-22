<script>
        // Function to toggle sign-in form visibility
        function toggleSignInForm() {
            var form = document.getElementById('signin-form');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        }

        // Function to close sign-in form
        function closeSignIn() {
            document.getElementById('signin-form').style.display = 'none';
        }

        // Event listener for sign-in button click
        document.getElementById('signin-btn').addEventListener('click', function() {
            toggleSignInForm();
        });
</script>