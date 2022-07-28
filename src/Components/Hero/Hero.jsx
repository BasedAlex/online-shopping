import React, { useState } from 'react'
import '../../input.css'
// import Modal from '../../UI/Modals/Modal'
// import icon from '../../assets/images/coolicon-close.svg'

const data = [
	{
		key: '1',
		mainTitle: (
			<h2 className='font-semibold text-base not-italic mb-1 my-0 text-black'>
				Авторассрочка на новые автомобили и автомобили с пробегом
			</h2>
		),
		subTitle: (
			<p className='not-italic font-normal text-sm m-0 mb-6 h-50'>
				Автомобили в рассрочку до 18 месяцев
			</p>
		),
		terms: (
			<h2 className='font-semibold text-base not-italic mb-1 my-0 text-black'>
				Условия:
			</h2>
		),
		termsCons: (
			<ul className='not-italic font-normal text-sm list-none pl-0 mb-6 mt-0 '>
				<li>&#8211; 0% за пользование рассрочкой;</li>
				<li>&#8211; первоначальный взнос от 0%;</li>
				<li>
					&#8211; рассрочка на 12 и 18 месяцев на новые автомобили марок Exeed,
					Geely;
				</li>
				<li>
					&#8211; рассрочка на 12 и 18 месяца на новые автомобили марок Hyundai,
					Genesis, Chery, Suzuki, Lada;
				</li>
				<li>&#8211; срок рассмотрения заявки меньше 1 часа</li>
			</ul>
		),
		termsExtraCons: '',
		extraAgreements: '',
		cardTitle: (
			<h4 className='text-sky-900	text-base font-semibold	pl-6 pr-14 pt-4'>
				Новый автомобиль
			</h4>
		),
		cardText: (
			<p className='font-sm pl-6 pr-5 my-3.5 h-20'>
				Иностранные и отечественные марки. Срок кредита – от 6 до 84 месяцев.
				Досрочное погашение без комиссии. Программой предусмотрено оформление
				договора страхования автомобиля от рисков хищения (угона), утраты
				(гибели).
			</p>
		),
	},
	{
		key: '2',
		mainTitle: (
			<h2 className='font-semibold text-base not-italic mb-1 my-0 text-black'>
				Условия кредитования
			</h2>
		),
		subTitle: '',
		terms: (
			<h2 className='font-semibold text-base not-italic mb-1 my-0 text-black'>
				Условия:
			</h2>
		),
		termsCons: (
			<ul className='not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0'>
				<li>&#8211; Гражданство РФ</li>
				<li>&#8211; Возраст от 20 лет</li>
			</ul>
		),
		termsExtraCons: (
			<article>
				<ul className='not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0'>
					<li>&#8211; Быстрое и простое оформление;</li>
					<li>
						&#8211; Минимальный пакет документов для оформления – паспорт
						гражданина РФ;
					</li>
					<li>&#8211; Рассмотрение заявки – 1 час;</li>
					<li>&#8211; Первоначальный взнос – от 0% от стоимости автомобиля;</li>
					<li>&#8211; Максимальная сумма кредита 6 900 000 рублей;</li>
				</ul>
			</article>
		),
		extraAgreements: '',
		cardTitle: (
			<h4 className='text-sky-900	text-base font-semibold	pl-6 pr-14 pt-4'>
				Автомобиль с пробегом
			</h4>
		),
		cardText: (
			<p className='font-sm pl-6 pr-5 my-3.5 h-20'>
				Автомобили иностранных и отечественных марок. Максимальный возраст
				автомобиля — 15 лет. Срок кредита – от 6 до 72 месяцев. Досрочное
				погашение без комиссии. Специальные ставки на покупку автомобилей не
				старше 5 и 10 лет.
			</p>
		),
	},
	{
		key: '3',
		mainTitle: '',
		subTitle: '',
		terms: (
			<h2 className='font-semibold text-base not-italic mb-1 my-0 text-black'>
				Банк возмещает каждый 12-й платеж по кредиту, <br />
				оплачиваемый заемщиком в течение срока действия договора
				потребительского кредита, если:
			</h2>
		),
		termsCons: (
			<ul className='not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0'>
				<li>
					&#8211; весь период пользования кредитом отсутствовала просроченная
					задолженность;
				</li>
				<li>
					&#8211; заемщик в каждом отчетном периоде совершал от 5 покупок на
					общую сумму от 10 000 рублей за счет собственных и/или заемных
					средств;
				</li>
				<li>
					&#8211; кредит является действующим на дату каждого 12 платежа по
					Графику платежей, <br />и Заемщик в течение всего срока действия
					кредита оплачивал платежи согласно первоначальным условиям,
					установленным в Договоре потребительского кредита <br />
					на момент заключения.
				</li>
			</ul>
		),
		termsExtraCons: '',
		extraAgreements: (
			<article>
				<p>
					При соблюдении вышеуказанных условий каждый 12-й платеж по кредиту,
					оплачиваемый заемщиком в течение срока действия договора
					потребительского кредита.
				</p>
			</article>
		),
		cardTitle: (
			<h4 className='text-sky-900	text-base font-semibold	pl-6 pr-14	pt-4'>
				Платежи в подарок!
			</h4>
		),
		cardText: (
			<p className='font-sm pl-6 pr-5 font-sans my-3.5 h-20'>
				Возмещение каждого 12-го платежа по кредиту
			</p>
		),
	},
	{
		key: '4',
		mainTitle: (
			<h2 className='font-semibold text-base not-italic mb-1 my-0 text-black'>
				Условия:
			</h2>
		),
		subTitle: '',
		terms: '',
		termsCons: (
			<ul className='not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0'>
				<li>&#8211; 0% за пользование рассрочкой;</li>
				<li>&#8211; первоначальный взнос от 0%;</li>
				<li>
					&#8211; рассрочка на 12 и 18 месяцев на новые автомобили марок Exeed,
					Geely;
				</li>
				<li>
					&#8211; рассрочка на 12 и 18 месяца на новые автомобили марок Hyundai,
					Genesis, Chery, Suzuki, Lada;
				</li>
				<li>&#8211; срок рассмотрения заявки меньше 1 часа</li>
			</ul>
		),
		termsExtraCons: '',
		extraAgreements: '',
		cardTitle: (
			<h4 className='text-sky-900	text-base font-semibold	pl-6 pr-14	pt-4 '>
				Авторассрочка на новые автомобили и на автомобили с пробегом
			</h4>
		),
		cardText: (
			<p className='font-sm pl-6 pr-5 font-sansmy-3.5 h-20'>
				Возмещение каждого 12-го платежа по кредиту
			</p>
		),
	},
	{
		key: '5',
		mainTitle: (
			<h2 className='font-semibold text-base not-italic mb-1 my-0 text-black'>
				Программа «Гарантия Отличной Ставки»
			</h2>
		),
		subTitle: (
			<p className='not-italic font-normal text-sm m-0 mb-6'>
				предполагает осуществление Банком при полном погашении кредита пересчета{' '}
				<br />
				процентов, оплаченных за весь срок действия Договора потребительского
				кредита, <br />
				по сниженной ставке, при условии что:
			</p>
		),
		terms: '',
		termsCons: (
			<ul className='not-italic font-normal text-sm	list-none	pl-0 mb-6 mt-0'>
				<li>
					&#8211; за весь период пользования кредитом отсутствовала просроченная
					задолженность;
				</li>
				<li>
					&#8211; частичное/полное досрочное погашение произведено не ранее, чем
					через 2 (два) года <br />с даты начала действия Договора
					потребительского кредита;
				</li>
				<li>
					&#8211; в течение всего срока кредитного договора в каждом отчётном
					периоде было сделано <br />
					от 5 любых покупок (их общая сумма должна составлять от 10 000 руб.)
				</li>
				<li>
					&#8211; заемщик в течение всего срока действия кредита оплачивал
					платежи согласно <br />
					первоначальным условиям, установленным в Договоре потребительского
					кредита <br />
					на момент заключения (за исключением изменений, вызванных досрочным
					погашением, <br />с соблюдением предусмотренных услугой требований).
				</li>
			</ul>
		),
		termsExtraCons: '',
		extraAgreements: (
			<article>
				<p>
					Разница в оплаченных процентах и процентах, рассчитанных по сниженной
					процентной ставке, возвращается Заемщику на его Банковский счет.{' '}
					<br />
					Является первой услугой в автокредитовании, подразумевающей наличие
					кэшбэка заемщику!
				</p>
			</article>
		),
		cardTitle: (
			<h4 className='text-sky-900	text-base font-semibold	pl-6 pr-14	pt-4'>
				Г.О.С. программа
			</h4>
		),
		cardText: (
			<p className='font-sm pl-6 pr-5 font-sans	my-3.5 h-20'>
				Снижению процентной ставки по договору потребительского кредита на
				покупку транспортного средства.
			</p>
		),
	},
]

function Hero() {
	// const [activeBodyModal, setActiveBodyModal] = useState([])
	// const [modalActive, setModalActive] = useState(false)
	// const showModal = item => {
	// 	setActiveBodyModal([item])
	// 	setModalActive(true)
	// }

	return (
		<div className='griden grid-rows-auto my-7 mx-28'>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Add to cart
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'>
					<a href='%'>
						<img
							className='rounded-t-lg'
							src='https://flowbite.com/docs/images/blog/image-1.jpg'
							alt=''
						/>
					</a>
					<div className='p-5'>
						<a href='#'>
							<h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
								Noteworthy technology acquisitions 2021
							</h5>
						</a>
						<p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href='%'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Read more
							<svg
								className='-mr-1 ml-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		// <section>
		// 	<div className='mt-7'>
		// 		<div className='ml-12 '>
		// 			<div className='griden'>
		// 				{data.map(modal => {
		// 					return (
		// 						<>
		// 							<div key={modal.key} className='col h-full'>
		// 								<div className='bg-white shadow-md	 shadow-neutral-500	'>
		// 									<div className='grid grid-cols-rentingrevtop auto-rowsers h-full'>
		// 										{modal.cardTitle}
		// 										<input
		// 											key={modal.key}
		// 											type='primary'
		// 											className='bg-modalViewButtonG hover:bg-modalViewButtonB active:bg-modalViewButtonB bg-no-repeat	bg-center	border-none	pt-6'
		// 											onClick={() => showModal(modal)}
		// 										/>
		// 									</div>
		// 									{modal.cardText}
		// 								</div>
		// 							</div>
		// 						</>
		// 					)
		// 				})}
		// 			</div>
		// 		</div>
		/* <Modal active={modalActive} setActive={setModalActive}>
						<div className='pt-8 pr-8 pb-0 pl-9'>
							{activeBodyModal.map(modal => {
								return (
									<div key={modal.key} className='grid'>
										<header>
											<div className='flex justify-between items-center'>
												<div>
													{modal.mainTitle}
													{modal.subTitle}
												</div>
												<span className='self-start'>
													<img
														src={icon}
														onClick={() => setModalActive(false)}
														alt='closing btn'
													/>
												</span>
											</div>
										</header>
										{modal.termsExtraCons}
										<article>
											{modal.terms}
											{modal.termsCons}
										</article>
										{modal.extraAgreements}
										<footer className='mb-6'>
											<button className='btn'>Подать заявку</button>
											<p className='ml-2 text-xs'>Решение до 20 минут</p>
										</footer>
									</div>
								)
							})}
						</div>
					</Modal> */
		// 	</div>
		// </section>
	)
}

export default Hero
