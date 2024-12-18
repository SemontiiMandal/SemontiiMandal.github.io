<script>
			// JavaScript to handle showing the resume viewer
			document.getElementById('view-resume-button').addEventListener('click', function() {
				const viewer = document.getElementById('resume-viewer');
				
				// Toggle the visibility of the resume viewer
				if (viewer.style.display === 'none') {
					viewer.style.display = 'block'; // Show the viewer
				} else {
					viewer.style.display = 'none'; // Hide the viewer if already visible
				}
			});
		</script>