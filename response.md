## Question 4
On installe d'abord vercel cli via la commande
`npm i -g vercel`
Pour savoir la version : `vercel -v`
Il nous renvoit 21.1.0

## Question 5
`vercel init angular`

## Question 6
`cd angular && vercel`

## Question 7
`vercel list`

## Question 8
`vercel logs angular-d21j8adlz.vercel.app`

## Question 9
`vercel inspect angular-d21j8adlz.vercel.app`
Affiche les informations relatives à un déploiement.

## Question 10
Une variable d'environnement est une variable utilisable par plusieurs processus différents ou non en même temps.

## Question 11
`vercel env add plain NAME_USER`

## Question 12
`vercel env ls`

## Question 13
La commande vercel secrets est utilisée pour gérer les secrets utilisés dans les variables d'environnement sous un compte, en fournissant des fonctionnalités pour lister, ajouter, renommer et supprimer des secrets.

## Question 15
```
vercel secret add user_name_s Yoann
vercel env add secret USER_NAME_S
```

## Question 16
Production - Preview - Development
- Parce que chaque environnement a un but précis, ces derniers requièrent des performances différentes, des données différentes, des utilisateurs différents.
- Parce qu’on souhaite éviter à tout prix que les problèmes éventuels de l’un puissent affecter l’autre.

## Question 18
https://angular-test-phi.vercel.app/

## Question 19
Dans leur forme la plus élémentaire, les pull requests permettent à un développeur de prévenir les membres de son équipe qu'il a terminé une fonctionnalité. Une fois que sa branche de fonctionnalité est prête, le développeur fait une pull request. Ainsi, toutes les personnes concernées sont informées du fait qu'elles doivent réviser le code et le merger dans la branche master.

![capture](https://github.com/PlodPemss/angular-test/blob/master/capture.PNG)

Vercel va lorsque la pull request sera accepté directement déployer les modifications. C'est l'environnement de développement qui sera ciblé.

## Question 20
newbranch was deployed by @vercel Vercel 5 minutes ago Active.
Toujours l'environnement de développement.
