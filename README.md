# Cicada 2022
Final Project for Cybersecurity 2021-22 @ Stuyvesant

Cicada 3301 inspired CTF, delving into topics like image steganography, dirbuster, and encryption.

Website is built on React + Node.js
## Scripts
`npm i` to install all required dependencies

`npm start` to start up the local development server

## Additional Resources
all project notes:
https://docs.google.com/document/d/19O1Jv3exhyIJpb1WKHl87LLgp-Q_c6ybfzy4AhoCXrA/edit?usp=sharing

main website:
https://cicada2022.netlify.app/

presentation:
https://docs.google.com/presentation/d/1xV6mxhSRTAj6tqIDWGwMXITd-NGWjXFUWJLZND4w5QM/edit#slide=id.p


## Logs
#### 12.14.2021 Justin Kim
Continued making progress with the test walkthrough to ensure that our process works.
Created a .jpg file embedded with a .txt to binwalk and steghide the .txt file out

#### 12.14.2021 Ethan Shan
Adding functionality to login page, creating react context to store isLoggedIn so /code will redirect back to /login if not authenticated.

#### 12.15.21 Justin Kim & Ethan Shan
Downloaded steghide on DigitalOcean machine and embedded .txt file into .jpeg. Continued working on the test walkthrough to ensure that the CTF runs smoothly. 

#### 12.16.21 Ethan Shan
Modified website to use craco and tailwindcss

#### 12.17.21 Justin Kim
Finished checking the walkthrough for the first half of the CTF and started learning BurpSuite for the presentation

#### 12.20.21 Justin Kim
Downloaded OBS to record SoundCloud audio. Finalized steps for the first part of the CTF.

#### 12.20.21 Ethan Shan
Continued work on main webpage, ensuring dirbuster works on site so that puzzle works out.

#### 12.21.21 Justin Kim
Created the audio file and the text file to encode/steghide into an image.

#### 12.22.21 Justin Kim
Used steghide to create the duck image with the txt file embedded in it using a password. 

#### 12.22.21 Ethan Shan
Debugging netlify issues, where pushing to github would not show changes on netlify production site. Continue to work on making vulnerability for burpsuite to exploit in site.

#### 12.23.21 Justin Kim
Completed the first chapter of the CTF. Got started with learning Burp Suite for the presentation and the second chapter of the CTF.

#### 1.3.22 Justin Kim
Fixed errors found in the prepared process for the first chapter of the CTF. Began the presentations for the second half of the CTF. 

#### 1.3.22 Ethan Shan
Remade netlify, fixing deployment to production issues.

####1.4.22 Justin Kim & Ethan Shan
Finished everything else including the 3D texts, getting the gcode, making the presentation, learning Burp Suite, learning how to do an SQL injection attack on Burp Suite, making the new web pages for the Burp Suite login and the g code and the final page, literally everything. Current time: 4:31AM
