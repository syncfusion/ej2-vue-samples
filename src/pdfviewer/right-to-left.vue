<template>
    <div>
        <div class="control-section">
            <ejs-pdfviewer id="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath":enableRtl ="true" locale='ar-AE' ></ejs-pdfviewer>
        </div>

       <div id="action-description">
       <p>RTL provides an option to switch the text direction and layout of the PDF Viewer from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL PDF Viewer, set the enableRtl to true.</p>
       </div>
 
       <div id="description">
       <p>
       In this example, you can see PDF Viewer right-to-left and the locale set in arabic[locale value is ar-AE]
       </p>
       <p>
       By default, locale value is en-US. If you want to change the en-US culture to a different culture, you have to change the locale accordingly.
       </p>
       <p>
       More information on the PDF Viewer features can be found in this
       <a target="_blank"
       href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/">
       documentation section</a>.
       </p>
        </div>
    </div>
</template>
<style>
	#pdfviewer {
		height: 640px;
	}
</style>
<script>
import Vue from "vue";
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation } from "@syncfusion/ej2-vue-pdfviewer";
import { L10n, setCulture  } from '@syncfusion/ej2-base';

Vue.use(PdfViewerPlugin);

export default Vue.extend({
    data: function() {
        return {
			serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
			documentPath:"RTLText.pdf"			
        }
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation]
    }	
});
//PDF Viewer Arabic Sample Locale
L10n.load({
    'ar-AE': {
        'PdfViewer' : {
            'PdfViewer': 'قوات الدفاع الشعبي المشاهد',
            'Cancel' : 'إلغاء',
            'Download file' : 'تحميل الملف',
            'Download': 'تحميل',
            'Enter Password' : 'هذا المستند محمي بكلمة مرور. يرجى إدخال كلمة مرور.',
            'File Corrupted' : 'ملف تالف',
            'File Corrupted Content' : 'الملف تالف ولا يمكن فتحه.',
            'Fit Page' : 'لائق بدنيا الصفحة',
            'Fit Width' : 'لائق بدنيا عرض',
            'Automatic' : 'تلقائي',
            'Go To First Page' : 'عرض الصفحة الأولى',
            'Invalid Password' : 'كلمة سر خاطئة. حاول مرة اخرى.',
            'Next Page' : 'عرض الصفحة التالية',
            'OK': 'حسنا',
            'Open' : 'فتح الملف',
            'Page Number' : 'رقم الصفحة الحالية',
            'Previous Page' : 'عرض الصفحة السابقة',
            'Go To Last Page' : 'عرض الصفحة الأخيرة',
            'Zoom' : 'تكبير',
            'Zoom In' : 'تكبير في',
            'Zoom Out' : 'تكبير خارج',
            'Page Thumbnails': 'مصغرات الصفحة',
            'Bookmarks': 'المرجعية',
            'Print' : 'اطبع الملف',
            'Password Protected' : 'كلمة المرور مطلوبة',
            'Copy': 'نسخ',
            'Text Selection': 'أداة اختيار النص',
            'Panning': 'وضع عموم',
            'Text Search': 'بحث عن نص',
            'Find in document': 'ابحث في المستند',
            'Match case': 'حالة مباراة',
            'Apply': 'تطبيق',
            'GoToPage': 'انتقل إلى صفحة',
             // tslint:disable-next-line:max-line-length
            'No matches': 'انتهى العارض من البحث في المستند. لم يتم العثور على مزيد من التطابقات',
            'No Text Found': 'لم يتم العثور على نص',
            // tslint:disable-next-line:max-line-length
            'Server error': 'خدمة الانترنت لا يستمع. يعتمد قوات الدفاع الشعبي المشاهد على خدمة الويب لجميع ميزاته. يرجى بدء خدمة الويب للمتابعة.',
            'Undo' : 'فك',
            'Redo' : 'فعل ثانية',
            'Annotation': 'إضافة أو تعديل التعليقات التوضيحية',
            'Highlight': 'تسليط الضوء على النص',
            'Underline': 'تسطير النص',
            'Strikethrough': 'نص يتوسطه خط',
            'Delete': 'حذف التعليق التوضيحي',
            'Opacity': 'غموض',
            'Color edit': 'غير اللون',
            'Opacity edit': 'تغيير التعتيم',
            'Highlight context': 'تسليط الضوء',
            'Underline context': 'أكد',
            'Strikethrough context': 'يتوسطه',
            'Open text': 'افتح',
            'First text': 'الصفحة الأولى',
            'Previous text': 'الصفحة السابقة',
            'Next text': 'الصفحة التالية',
            'Last text': 'آخر صفحة',
            'Zoom in text': 'تكبير',
            'Zoom out text': 'تصغير',
            'Selection text': 'اختيار',
            'Pan text': 'مقلاة',
            'Print text': 'طباعة',
            'Search text': 'بحث',
            'Annotation Edit text': 'تحرير التعليق التوضيحي',
            'Line Thickness': 'سمك الخط',
            'Line Properties': 'خط الخصائص',
            'Start Arrow': 'ابدأ السهم',
            'End Arrow': 'نهاية السهم',
            'Line Style': 'أسلوب الخط',
            'Fill Color': 'ملء اللون',
            'Line Color': ' الخط اللون',
            'None': 'لا شيء',
            'Open Arrow': 'افتح',
            'Closed Arrow': 'مغلق',
            'Round Arrow': 'مستدير',
            'Square Arrow': 'مربع',
            'Diamond Arrow': 'الماس',
            'Cut': 'يقطع',
            'Paste': 'معجون',
            'Delete Context': 'حذف',
            'Properties': 'الخصائص',
            'Add Stamp': 'إضافة الطوابع',
            'Add Shapes': 'أضف الأشكال',
            'Stroke edit': 'تغيير لون السكتة الدماغية',
            'Change thickness': 'تغيير سمك الحدود',
            'Add line': 'إضافة خط',
            'Add arrow': 'سهم إضافة',
            'Add rectangle': 'أضف مستطيل',
            'Add circle': 'إضافة دائرة',
            'Add polygon': 'أضف مضلع',
            'Add Comments': 'أضف تعليقات',
            'Comments': 'تعليقات',
            'No Comments Yet': 'لا توجد تعليقات حتى الآن',
            'Accepted': 'وافقت',
            'Completed': 'منجز',
            'Cancelled': 'ألغيت',
            'Rejected': 'مرفوض',
            'Leader Length': 'زعيم الطول',
            'Scale Ratio': 'نسبة مقياس',
            'Calibrate': 'عاير',
            'Calibrate Distance': 'معايرة المسافة',
            'Calibrate Perimeter': 'معايرة محيط',
            'Calibrate Area': 'عاير منطقة',
            'Calibrate Radius': 'معايرة نصف القطر',
            'Calibrate Volume': 'معايرة الحجم',
            'Depth': 'عمق',
            'Closed': 'مغلق',
            'Round': 'مستدير',
            'Square': 'ميدان',
            'Diamond': 'الماس',
            'Edit': 'تصحيح',
            'Comment': 'تعليقات',
            'Comment Panel': 'لوحة التعليقات',
            'Set Status': 'تعيين الحالة',
            'Post': 'بريد',
            'Page': 'صفحة',
            'Add a comment': 'أضف تعليق',
            'Add a reply': 'أضف رد'
        }
    }
});
</script>
