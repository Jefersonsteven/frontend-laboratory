import style from './styles.module.css';

interface Props {
    href: string;
    title: string;
    image: ImageMetadata;
    width: number;
    imageDescription: string;
    aspectRadio?: string;
}

export function OptionNavigation({ href, title, image, width, imageDescription, aspectRadio }: Props) {
    return (
        <a className={style.option} href={href}>
            <h2 className={style['option__title']}>{title}</h2>
            <figure className={style['option__image']} style={{aspectRatio: `${aspectRadio ?? "auto"}`}}>
                <img src={image.src} alt={imageDescription} width={width} />
            </figure>
        </a>
    )
}