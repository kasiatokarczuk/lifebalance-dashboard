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



--------------------------------------------------------
URUCHOMIENIE NA WINDOWSIE -> NA WSL 
wchodzimy na terminal, na gorze okienka po lewej stronie obok plusika na strzalke i wybieramy ubuntu    
potem trzeba znowu sie zalgowac jak wczesniej na github   
git clone https://github.com/kasiatokarczuk/lifebalance-dashboard.git      
potem nie wchodzac jeszzce w projekt zainstalowalam node -> sudo apt install nodejs  
potem sprawdzialam (wpisujac npm -v) czy mam to npm i co ciekawe mialam takze nie instalowalam  
potem weszlam w projekt i juz elegancko sie stronka odpalala na tym localhost:3000    
zeby miec visuala to w folderze projektu trzeba wpisac -> code .    

aleeee zeby to zadzialalo to trzeba najpiew wejsc sobie po protstu w apke visuala i zainstalowac rozszerzenie "Remote - WSL"    
- W VS Code przejdź do zakładki Extensions (rozszerzenia).
- Wyszukaj i zainstaluj: WSL



