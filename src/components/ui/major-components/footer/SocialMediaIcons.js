import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SocialIcons = () => {
    const icons = [
        {icon :  'fa-brands fa-facebook' , brand : 'FaceBook'},
        {icon :  'fa-brands fa-instagram' , brand : 'Instagram'},
        {icon :  'fa-brands fa-twitter' , brand : 'Twitter'},
        {icon :  'fa-brands fa-github' , brand : 'Github'},
        {icon :  'fa-brands fa-whatsapp' , brand : 'Whatsapp'}
    ]

    return (
        <>
            {icons.map((icon, index) => (
                <a key={`social-icon-${index}`} href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" >
                    <FontAwesomeIcon className="w-5 h-5" icon={icon.icon} />
                    <span className="sr-only">{icon.brand} page</span>
                </a>
            ))}
        </>
    )

}