spr czy jest git zainstalowany  

**logowanie go githuba**  
sudo apt install gh  
gh auth status  
gh auth login  
i tam juz klikac i wybrac opcje zeby w przegladarce se zalgowac :))))


git clone https://github.com/kasiatokarczuk/lifebalance-dashboard.git  

zeby pobrac (to juz robic w tym katalogu z projektem):   
sudo apt install nodejs npm  

potem sprawdzenie czy to pobrane dziala:  
node -v  
npm -v  

zeby uruchomic serwer:   
node index.js  

potem to w wyszukiwarce:   
http://localhost:3000  



a jak nie bedzie dzialac to trzeba inaczej to nodejs i npm pobrac: 
- sudo apt remove nodejs npm
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
- source ~/.bashrc
- command -v nvm
- nvm install --lts
- nvm use --lts
- node -v
- npm -v


